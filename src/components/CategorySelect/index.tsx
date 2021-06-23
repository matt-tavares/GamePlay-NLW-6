import React from "react";
import { ScrollView } from 'react-native';

import { styles } from './style';
import { categories } from "../../utils/Categories";
import { Category } from "../Category";

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void
}

export function CategorySelect({
    categorySelected,
    setCategory
}: Props) {
    return(
        <ScrollView
            horizontal
            style={styles.container}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}
        >
            {
            categories.map(category => (
                <Category
                    key={category.id}
                    title={category.title}
                    icon={category.icon}
                    checked={category.id === categorySelected}
                    onPress={() => setCategory(category.id)}
                />
            ))
            }

        </ScrollView>
    )
}