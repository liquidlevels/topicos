import { Box, Button, Group, Radio, Select, Text, TextInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import  React, {Children, useState} from 'react'
import AppShellDemo from '../components/AppShellDemo'
import CuadroDietosintetico from '../components/CuadroDietosintetico'
import { createFormContext } from '@mantine/form';

const energyTest = () => {
  
    const form = useForm ({
        initialValues:{
            sexo: '',
            edad: '',
            masa: '',
            altura: '',
            gastoEnergeticoTotal: '',
            gastoEnergeticoBasal: '',
            seleccionFormula: '',
            seleccionFactorActividad: '',
            formulasGET: '',
            formulasGEB: ''
        }
    })


    const [gastoEnergeticoTotal, setGastoEnergeticoTotal] = useState('')
    const [gastoEnergeticoBasal, setGastoEnergeticoBasal] = useState('')

    let edad = form.getInputProps('edad').value
    let masa = form.getInputProps('masa').value
    let altura = form.getInputProps('altura').value

    const GET = () => {

        let formulasGET = {
            0: 1.2 , //sedentario
            1: 1.3,  //ligero
            2: 1.5,  //moderado
            3: 1.7,  //activo
            4: 1.9  //vigoroso
        } 
        
        return gastoEnergeticoTotal = gastoEnergeticoBasal * formulasGET[form.getInputProps('seleccionFactorActividad').value]

                //Esta es la primer version del calculo de GET

        // switch( form.getInputProps('seleccionFactorActividad').value ){
        //     case '0':
        //         gastoEnergeticoTotal = 1.2 * gastoEnergeticoBasal
        //         break
        //     case '1':
        //         gastoEnergeticoTotal = 1.3 * gastoEnergeticoBasal
        //         break
        //     case '2':
        //         gastoEnergeticoTotal = 1.5 * gastoEnergeticoBasal
        //         break
        //     case '3':
        //         gastoEnergeticoTotal = 1.7 * gastoEnergeticoBasal
        //         break
        //     case '4':
        //         gastoEnergeticoTotal = 1.9 * gastoEnergeticoBasal
        //         break
        // }

        // console.log(gastoEnergeticoTotal)

        // return gastoEnergeticoTotal
    }

    const GEB = () => {

        let formulasGEB = {
            0:{
                0: gastoEnergeticoBasal = ( 655.1 + ( 9.56 * masa ) + ( 1.86 * altura ) - ( 4.68 * edad ) ),
                1: gastoEnergeticoBasal = ( ( 8.7 * masa ) - ( 25 * (altura / 100) ) ) + 865,
                2: gastoEnergeticoBasal = 795 + ( 7.18 * masa ),
                3: {
                    0: gastoEnergeticoBasal = 679 + ( 11.02 * masa ),   //edad > 18 && edad < 29
                    1: gastoEnergeticoBasal = 677 + ( 10.92 * masa ),   //edad > 30 && edad < 59
                    2: gastoEnergeticoBasal = 520 + ( 10.98 * masa )    //edad > 60
                },
                4: gastoEnergeticoBasal = ( ( 10 * masa ) + ( 6.25 * altura ) - ( 5 * edad ) - 161 )
            },
            1: {
                0: gastoEnergeticoBasal = ( 66.5 + ( 13.75 * masa ) + ( 5 * altura ) - ( 6.78 * edad ) ),
                1: gastoEnergeticoBasal = ( ( 13.3 * masa ) + ( 16 * (altura / 100) ) + 901 ),
                2: gastoEnergeticoBasal = 795 + ( 7.18 * masa ),
                3: {
                    0: gastoEnergeticoBasal = 747 + ( 13.37 * masa ),   //edad > 18 && edad < 29
                    1: gastoEnergeticoBasal = 693 + ( 13.08 * masa ),   //edad > 30 && edad < 59
                    2: gastoEnergeticoBasal = 429 + ( 14.21 * masa )    //edad > 60
                },
                4: gastoEnergeticoBasal = ( ( 10 * masa ) + ( 6.25 * altura ) - ( 5 * edad ) + 5 )
            }
        }

        if( form.getInputProps('sexo').value === 0 ){
            switch( form.getInputProps('seleccionFormula').value ){
                case '0':
                    formulasGEB[0[0]]
                    break
                case '1':
                    formulasGEB[0[1]]
                    break
                case '2':
                    formulasGEB[0[2]]
                    break
                case '3':
                    formulasGEB[0[3]]
                    break
                case '4':
                    formulasGEB[0[4]]
                    break
            }
        }
        else {
            switch( form.getInputProps('seleccionFormula').value  ){
                case '0':
                    formulasGEB[1[0]]
                    break
                case '1':
                    formulasGEB[1[1]]
                    break
                case '2':
                    formulasGEB[1[2]]
                    break
                case '3':
                    formulasGEB[1[3]]
                    break
                case '4':
                    formulasGEB[1[4]]
                    break
            }
        }

        setGastoEnergeticoTotal(GET)

        return gastoEnergeticoBasal

                //Esta es la primer version del calculo de GEB

        // if( form.getInputProps('sexo').value === '0' ){
        //     switch( form.getInputProps('seleccionFormula').value ){
        //         case '0':
        //             gastoEnergeticoBasal = ( 655.1 + ( 9.56 * masa ) + ( 1.86 * altura ) - ( 4.68 * edad ) )
        //             break
        //         case '1':
        //             gastoEnergeticoBasal = ( ( 8.7 * masa ) - ( 25 * (altura /100) ) ) + 865  
        //             break
        //         case '2': 
        //             gastoEnergeticoBasal = 795 + ( 7.18 * masa )
        //             break
        //         case '3': 
        //             if( edad > 18 && edad < 29 ){
        //                 gastoEnergeticoBasal = 679 + ( 11.02 * masa )
        //             }   
        //             else if ( edad > 30 && edad < 59){
        //                 gastoEnergeticoBasal = 677 + ( 10.92 * masa )
        //             }
        //             else {
        //                 gastoEnergeticoBasal = 520 + ( 10.98 * masa )
        //             }
        //             break
        //         case '4': 
        //             gastoEnergeticoBasal = ( ( 10 * masa ) + ( 6.25 * altura ) - ( 5 * edad ) - 161 )
        //             break
        //     }
        // }
        // else{
        //     switch( form.getInputProps('seleccionFormula').value ){
        //         case '0':
        //             gastoEnergeticoBasal = ( 66.5 + ( 13.75 * masa ) + ( 5 * altura ) - ( 6.78 * edad ) )
        //             break
        //         case '1':
        //             gastoEnergeticoBasal = ( ( 13.3 * masa ) + ( 16 * (altura /100) ) + 901 )  
        //             break
        //         case '2': 
        //             gastoEnergeticoBasal = 879 + ( 10.2 * masa )
        //             break
        //         case '3': 
        //             if( edad > 18 && edad < 29 ){
        //                 gastoEnergeticoBasal = 747 + ( 13.37 * masa )
        //             }   
        //             else if ( edad > 30 && edad < 59){
        //                 gastoEnergeticoBasal = 693 + ( 13.08 * masa )
        //             }
        //             else {
        //                 gastoEnergeticoBasal = 429 + ( 14.21 * masa )
        //             }
        //             break
        //         case '4': 
        //             gastoEnergeticoBasal = ( ( 10 * masa ) + ( 6.25 * altura ) - ( 5 * edad ) + 5 )
        //             break
        //     }
        // }

        console.log(gastoEnergeticoBasal)

        setGastoEnergeticoTotal(GET)

        return gastoEnergeticoBasal
    }

    const llamarTodoPapi = () => {
        setGastoEnergeticoBasal(GEB)
    }

  return (
    <CuadroDietosintetico>
        <Box sx={{ maxWidth: 500 }} mx='auto'>
            <form>
                <Title order={1} align='center'>Calculo Dietetico</Title>
                <Radio.Group
                    mt='sm'
                    label='Sexo'
                    {...form.getInputProps('sexo')}
                >
                    <Radio value='0' label='Femenino' />
                    <Radio value='1' label='Masculino' />
                </Radio.Group>
                <TextInput
                    mt='sm'
                    label='Edad'
                    placeholder='edad en años'
                    {...form.getInputProps('edad')}
                />
                <TextInput
                    mt='sm'
                    label='Masa'
                    placeholder='masa en kg'
                    {...form.getInputProps('masa')}
                />
                <TextInput
                    mt='sm'
                    label='Altura'
                    placeholder='altura en cm'
                    {...form.getInputProps('altura')}
                />
                <Select
                    mt='sm'
                    label='Factor de Actividad'
                    placeholder='Selecciona uno'
                    data={[
                        {value: '0', label: 'Sedentario'},
                        {value: '1', label: 'Ligero'},
                        {value: '2', label: 'Moderado'},
                        {value: '3', label: 'Activo'},
                        {value: '4', label: 'Vigoroso'}
                    ]}
                    {...form.getInputProps('seleccionFactorActividad')}
                />
                <Select
                    mt='sm'
                    label='Formulas'
                    placeholder='Selecciona una'
                    data={[
                        {value: '0', label: 'Harris - Benedict'},
                        {value: '1', label: 'OMS'},
                        {value: '2', label: 'Owen'},
                        {value: '3', label: 'Valencia'},
                        {value: '4', label: 'Mifflin St-Jeor'}
                    ]}
                    {...form.getInputProps('seleccionFormula')}
                />
                <Group position='right' mt='md'>
                    <Button color='dark' onClick={ () => llamarTodoPapi() }>Calcular</Button>
                </Group>    
                <Text mt='sm'>Gasto Energetico Basal: {gastoEnergeticoBasal}</Text>
                <Text>Gasto Energetico Total: {gastoEnergeticoTotal}</Text>
            </form>
        </Box>
    </CuadroDietosintetico>
  )
}

export default energyTest