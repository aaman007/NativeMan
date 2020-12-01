import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
    const [goal, setGoal] = useState('');

    useEffect(() => {
        setGoal('');
    }, [props.showModal]);

    return (
        <Modal visible={props.showModal} animationType={"slide"}>
            <View style={styles.inputContainer}>
                <TextInput
                    value={goal}
                    placeholder={"Enter Goal"}
                    onChangeText={text => setGoal(text)}
                    style={styles.input}
                />
                <Button
                    title={"Cancel"}
                    color={"red"}
                    onPress={props.toggleModal}
                />
                <Button title={"ADD"} onPress={() => {
                    if (goal) {
                        props.handleGoalAdd(goal);
                        props.toggleModal();
                    }
                }} />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        width: '90%',
        height: 50,
        marginBottom: 10
    }
});

export default GoalInput;
