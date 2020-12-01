import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => props.onDelete(props.id)}>
            <View style={styles.listItem}>
                <Text> {props.title} </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        padding: 10,
        backgroundColor: '#e2d9d6',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
        marginRight: 10
    }
});

export default GoalItem;
