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
      get: '',
    }
  })

  // let sexo = form.getInputProps('sexo')
  let edad = form.getInputProps('edad')
  let peso = form.getInputProps('peso')
  let altura = form.getInputProps('altura')

  const [factorActividad, setFactorActividad] = useState('')
  const [resultadoFormula, setResultadoFormula] = useState('')
  const [get, setGET] = useState('') 

  const calculoFactorActividad = () => {
    
    switch( form.getInputProps('seleccionFactorDeActividad') ){
      case '0':
        factorActividad = 1.2
        break
      case '1':
        factorActividad = 1.3 
        break
      case '2':
        factorActividad = 1.5 
        break
      case '3':
        factorActividad = 1.7
        break
      case '4':
        factorActividad = 1.9
        break
    }

    console.log(factorActividad)

    return factorActividad
  }

  const calculoFormulas = () => {

    if( form.getInputProps('sexo') === 'femenino' ){
      switch( form.getInputProps('formula') ){
        case '0':
          resultadoFormula = 655.1 + ( 9.56 * peso ) + ( 1.85 * altura ) - ( 4.68 * edad )
          break
        case '1':
          resultadoFormula = ( 8.7 * peso ) - ( 25 * altura ) + 865
          break
        case '2':
          resultadoFormula = 795 + ( 7.18 * peso )
          break
        case '3':
          if( edad > 18 && edad < 29 ){
            resultadoFormula = ( 11.02 * peso ) + 679
          }
          else if( edad > 30 && edad < 59 ){
            resultadoFormula = ( 10.92 * peso ) + 677
          }
          else if( edad > 60 ){
            resultadoFormula = ( 10.98 * peso ) + 520
          }
          break
        case '4':
          resultadoFormula = ( 10 * peso ) + ( 6.25 * altura ) - ( 5 * edad ) - 161
          break
      }
    }
    else if ( form.getInputProps('sexo') === 'masculino' ){
      switch( form.getInputProps('formula') ){
        case '0':
          resultadoFormula = 66.5 + ( 13.75 * peso ) + ( 5 * altura ) - ( 6.78 * edad )
          break
        case '1':
          resultadoFormula = (( 11.3 * peso ) - ( 16 * altura ) + 901)
          break
        case '2':
          resultadoFormula = (879 + ( 10.2 * peso ) )
          break
        case '3':
          if( edad > 18 && edad < 29 ){
            resultadoFormula = ( 13.37 * peso ) + 747
          }
          else if( edad > 30 && edad < 59 ){
            resultadoFormula = ( 13.08 * peso ) + 693
          }
          else if( edad > 60 ){
            resultadoFormula = ( 14.21 * peso ) + 429
          }
          break
        case '4':
          resultadoFormula = ( ( 10 * edad ) + ( 6.25 * altura ) - ( 5 * edad ) + 5 )
          break
      }
    }
    console.log(resultadoFormula)

    return resultadoFormula //resultadoFormula = Gasto Energetico Basal
  }

  const calculoGET = () => {
    get = resultadoFormula * factorActividad

    return get
  }


  const llamaTodoPapi = () => {
    setFactorActividad(calculoFactorActividad)
    setResultadoFormula(calculoFormulas)
    setGET(calculoGET)
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
                {value: '0', label: 'Sedentario'},
                {value: '1', label: 'Ligero'},
                {value: '2', label: 'Moderado'},
                {value: '3', label: 'Activo'},
                {value: '4', label: 'Vigoroso'}
              ]}
              {...form.getInputProps('seleccionFactorDeActividad')}
            />

            <Select
              label='Formulas disponibles'
              placeholder='Selecciona una'
              data={[
                {value: '0', label: 'Harris - Benedict'},
                {value: '1', label: 'OMS'},
                {value: '2', label: 'Owen'},
                {value: '3', label: 'Valencia'},
                {value: '4', label: 'Mifflin St - Jeor'}
              ]}
              {...form.getInputProps('formula')}
            />

            <Group position='right' mt='md'>
              <Button color='dark' onClick={ () => llamaTodoPapi() }>
                Resultado
              </Button>
            </Group>

            <Text size='md'>Gasto Energetico Basal: {resultadoFormula}</Text>
            {/* <Text size='md'>Factor de Actividad: {factorActividad}</Text> */}
            <Text size='md'>Gasto Energetico Total: {get}</Text>
        </form>
      </Box>
    </AppShellDemo>
  )
}

export default energy