import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Formik } from 'formik';
import { globalStyles } from "../shared/globalImages";
import * as yup from 'yup';
import Button from "../shared/button";


const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1-5', (val)=> {
        return parseInt(val) < 6 && parseInt(val) > 0;
    })
})

const ReviewForm = ({ addReview }) => {
    return (
        <View style={globalStyles.container} >
            <Formik
                initialValues={{title:'', body:'', rating: ''}}
                validationSchema={reviewSchema}
                onSubmit={ (values, actions) =>{
                    //actions.resetForm()               //to reset the form if we dont close the modal
                    addReview(values)           
                    //console.log(values)
                }}
            >
                {(formikprops) => (
                    <View style={{margin:15}}>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={formikprops.handleChange('title')}
                            value={formikprops.values.title}
                            onBlur={formikprops.handleBlur('title')}                                                   //real-time valiadtion errors
                        />

                        <Text style={globalStyles.errorTxt}>{ formikprops.touched.title && formikprops.errors.title}</Text>

                        <TextInput
                            multiline
                            minHeight={60}
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={formikprops.handleChange('body')}
                            value={formikprops.values.body}
                            onBlur={formikprops.handleBlur('body')}
                        />

                        <Text style={globalStyles.errorTxt}>{ formikprops.touched.body && formikprops.errors.body}</Text>

                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Rating (1-5 stars)'
                            onChangeText={formikprops.handleChange('rating')}
                            value={formikprops.values.rating}
                            keyboardType="numeric"
                            onBlur={formikprops.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorTxt}>{ formikprops.touched.rating && formikprops.errors.rating}</Text>


                        <Button text='submit' onPress={formikprops.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
};

export default ReviewForm;