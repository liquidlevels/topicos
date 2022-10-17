import React, {useState} from 'react'
import  {useForm}  from '@mantine/form';
import { Text, Title } from '@mantine/core';
import { TextInput, Button, Group, Box } from '@mantine/core';
import { Select } from '@mantine/core';
import AppShellDemo from '../components/AppShellDemo'

const energy = () => {

  const form = useForm({
    initialValues: {
      sexo: '',
      edad: '',
      peso: '',
      altura: '',
      seleccionFactorDeActividad: '',
      factorActividad: '',
      resultadoFormula: '',
    }
  })

  const [factorActividad, setFactorActividad] = useState('')
  const [resultadoFormula, setResultadoFormula] = useState('')

  const calculoFactorActividad = () => {
    
    switch( form.getInputProps('seleccionFactorDeActividad').value ){
      case 'sedentario':
        factorActividad = 1.2
        break
      case 'ligero':
        factorActividad = 1.3 
        break
      case 'moderado':
        factorActividad = 1.5 
        break
      case 'activo':
        factorActividad = 1.7
        break
      case 'vigoroso':
        factorActividad = 1.9
        break
    }

    console.log(factorActividad)

    return factorActividad
  }

  const calculoFormulas = () => {

    if( form.getInputProps('sexo').value === 'femenino' ){
      switch( form.getInputProps('formula').value ){
        case 'harris-benedict':
          resultadoFormula = 655.1 + ( 9.56 * form.getInputProps('peso').value ) + ( 1.85 * form.getInputProps('altura').value ) - ( 4.68 * form.getInputProps('edad').value )
          break
        case 'oms':
          resultadoFormula = ( 8.7 * form.getInputProps('peso').value ) - ( 25 * form.getInputProps('altura').value ) + 865
          break
        case 'owen':
          resultadoFormula = 795 + ( 7.18 * form.getInputProps('peso').value )
          break
        case 'valencia':
          if( form.getInputProps('edad').value > 18 && form.getInputProps('edad').value < 29 ){
            resultadoFormula = ( 11.02 * form.getInputProps('peso').value ) + 679
          }
          else if( form.getInputProps('edad').value > 30 && form.getInputProps('edad').value < 59 ){
            resultadoFormula = ( 10.92 * form.getInputProps('peso').value ) + 677
          }
          else if( form.getInputProps('edad').value > 60 ){
            resultadoFormula = ( 10.98 * form.getInputProps('peso').value ) + 520
          }
          break
        case 'mifflin':
          resultadoFormula = ( 10 * form.getInputProps('peso') ) + ( 6.25 * form.getInputProps('altura') ) - ( 5 * form.getInputProps('edad')) - 161
          break
      }
    }
    else if ( form.getInputProps('sexo').value === 'masculino' ){
      switch( form.getInputProps('formula') ){
        case 'harris-benedict':
          resultadoFormula = 66.5 + ( 13.75 * form.getInputProps('peso').value ) + ( 5 * form.getInputProps('altura').value ) - ( 6.78 * form.getInputProps('edad').value )
          break
        case 'oms':
          resultadoFormula = ( 11.3 * form.getInputProps('peso').value ) - ( 16 * form.getInputProps('altura').value ) + 901
          break
        case 'owen':
          resultadoFormula = 879 + ( 10.2 * form.getInputProps('peso').value )
          break
        case 'valencia':
          if( form.getInputProps('edad').value > 18 && form.getInputProps('edad').value < 29 ){
            resultadoFormula = ( 13.37 * form.getInputProps('peso').value ) + 747
          }
          else if( form.getInputProps('edad').value > 30 && form.getInputProps('edad').value < 59 ){
            resultadoFormula = ( 13.08 * form.getInputProps('peso').value ) + 693
          }
          else if( form.getInputProps('edad').value > 60 ){
            resultadoFormula = ( 14.21 * form.getInputProps('peso').value ) + 429
          }
          break
        case 'mifflin':
          resultadoFormula = ( ( 10 * form.getInputProps('peso') ) + ( 6.25 * form.getInputProps('altura') ) - ( 5 * form.getInputProps('edad')) + 5 )
          break
      }
    }
    console.log(resultadoFormula)

    return resultadoFormula //resultadoFormula = Gasto Energetico Basal
  }

  const llamaTodoPapi = () => {
    setResultadoFormula(calculoFormulas)
    setFactorActividad(calculoFactorActividad)
  }

  return (
    <AppShellDemo>
      <Box sx={{ maxWidth: 500 }} mx='auto'>
        <form>
          <Title align='center'>CALCULO DIETETICO</Title>

            <Select
              label="Selecciona tu sexo"
              placeholder='Selecciona uno'    
              data={[
                {value: 'femenino', label: 'Femenino'},
                {value: 'masculino', label: 'Masculino'}
              ]}
              {...form.getInputProps('sexo')}
            />

            <TextInput
              label= 'Edad'
              placeholder='edad en años'
              {...form.getInputProps('edad')}
            />

            <TextInput
              label= 'Peso'
              placeholder='peso en kg'
              {...form.getInputProps('peso')}
            />

            <TextInput
              label= 'Altura'
              placeholder='altura en cm'
              {...form.getInputProps('altura')}
            />

            <Select
              label='Factor de Actividad'
              placeholder='Selecciona uno'
              data={[
                {value: 'sedentario', label: 'Sedentario'},
                {value: 'ligero', label: 'Ligero'},
                {value: 'moderado', label: 'Moderado'},
                {value: 'activo', label: 'Activo'},
                {value: 'vigoroso', label: 'Vigoroso'}
              ]}
              {...form.getInputProps('seleccionFactorDeActividad')}
            />

            <Select
              label='Formulas disponibles'
              placeholder='Selecciona una'
              data={[
                {value: 'harris-benedict', label: 'Harris - Benedict'},
                {value: 'oms', label: 'OMS'},
                {value: 'owen', label: 'Owen'},
                {value: 'valencia', label: 'Valencia'},
                {value: 'mifflin', label: 'Mifflin St - Jeor'}
              ]}
              {...form.getInputProps('formula')}
            />

            <Group position='right' mt='md'>
              <Button color='dark' onClick={ () => llamaTodoPapi() }>
                Resultado
              </Button>
            </Group>

            <Text size='md'>Gasto Energetico Basal: {resultadoFormula}</Text>
            <Text size='md'>Factor de Actividad: {factorActividad}</Text>
        </form>
      </Box>
    </AppShellDemo>
  )
}

export default energy