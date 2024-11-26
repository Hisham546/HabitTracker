import { View, Text } from "react-native";
import { useState } from "react";

import { ButtonComponent, TextInputOutlined } from "../../components/index";
import styles from "./styles";
import { Icon } from "../../utils/Icon";






const CreateHabits = () => {











    const [formData, setFormData] = useState({

        name: '',
        password: ''




    });



    const onChangeText = (state: string, value: string | number) => {





        setFormData(prevState => ({
            ...prevState,
            [state]: value,
        }));

    };





    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <Icon
                iconFamily={'AntDesign'}
                size={23}
                style={{ color: 'black' }}
                name={'close'}
                />
                <Text style={styles.createHabit}> Create Habit</Text>
            </View>
            <View style={styles.centerView}>
                <TextInputOutlined
                    labelstyle={styles.labelstyle}
                    parentContaineStyle={styles.parentContaineStyle}

                    textInputStyle={styles.textInputStyle}

                    headingLabel={'Name'}
                    showLabel={true}


                    placeholderText={"Name"}
                    keyboardType='default'
                    onChangeText={value => onChangeText("name", value)}

                    value={formData.name}
                />
                <TextInputOutlined
                    labelstyle={styles.labelstyle}
                    parentContaineStyle={styles.parentContaineStyle}

                    textInputStyle={styles.textInputStyle}

                    headingLabel={'Description'}
                    showLabel={true}


                    placeholderText={"Description"}
                    keyboardType='default'
                    onChangeText={value => onChangeText("name", value)}

                    value={formData.name}
                />
            </View>
        </View>
    )
}

export default CreateHabits;