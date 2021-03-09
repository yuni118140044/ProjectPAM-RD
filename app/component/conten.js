import React from 'react';
import { View, Text , StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {penambahan, pengurangan} from './store/action';

const Conten = (props) =>{
    const data = useSelector((state) => state);
    const { counter } = data;
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Button title="tambah" onPress ={() => dispatch(penambahan())}/>
                    <Text>----------------------</Text>
                    <Text>{counter}</Text>
                    <Text>----------------------</Text>
                    <Text> Yuni Nurdiyanti 118140044</Text>
                    <Text>----------------------</Text>
             <Button title="kurang" onPress ={() => dispatch(pengurangan())}/>
        </View>
    
    );
};
export default Conten;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems :'center',
        justifyContent:'center'
    },
});