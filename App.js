import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FlatList
} from 'react-native';

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [goals, setGoals] = useState([]);
    const [currentId, setCurrentId] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(prevState => !prevState);
    }

    const handleGoalAdd = (enteredGoal) => {
        setGoals(prevState => {
            const id = currentId;
            setCurrentId(prevState1 => prevState1+1);
            return [...prevState, {
                randomId: id,
                value: enteredGoal
            }];
        });
    };

    const handleGoalDelete = (randomId) => {
        setGoals(prevState => goals.filter(goal => goal.randomId !== randomId));
    }


    return (
        <View style={styles.screen}>
            <Text style={styles.logo}> GoalApp </Text>
            <Button title={"Add New Goal"} onPress={toggleModal} />
            <GoalInput
                showModal={showModal}
                toggleModal={toggleModal}
                handleGoalAdd={handleGoalAdd}
            />
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={goals}
                renderItem={itemData => (
                    <GoalItem
                        id={itemData.item.randomId}
                        onDelete={handleGoalDelete}
                        title={itemData.item.value}
                    />
                    )}
            />
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },

    logo: {
        textAlign: 'center',
        marginBottom: 15,
        fontSize: 30,
        fontWeight: 'bold'
    }
});
