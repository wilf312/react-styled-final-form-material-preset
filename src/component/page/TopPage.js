import React from 'react'
import TextField from 'atom/TextField/adapt'
import Slider from 'adapt/Slider'
import Checkbox from 'atom/Checkbox/adapt'
import { Form, Field } from 'react-final-form'
import Styled from 'styled-components'
import {composeValidators, required, basicLatin} from '../util/validation'

class TopPage extends React.Component {
  render () {
    return (<div>
      <p> Hello React & final-form & material-ui & Styled-components!</p>
      <Form
        onSubmit={() => {}}
        initialValues={{
          Slider: 13,
          TextField: '',
          Checkbox: 'a',
          Text: 'Text',
          Color: '#00ff00',
          LuckyNumber: '2',
          PotateChips: [
            'consomme'
          ],
          Ice: [
            'Chocolate'
          ]
        }}
        validate={required}
        render={({ values }) => (
          <Wrap>
            <StyledSection>
              <h2>third party</h2>
              <h3>Slider</h3>
              <Field name='Slider' component={Slider} initialValue={values.Slider} />

              <h3>Text</h3>
              <Field
                name='TextField'
                component={TextField}
                validate={composeValidators(required, basicLatin)}
                defaultValue={values.TextField}
                hintText={'john titor'}
                disabled={false}
                floatingLabelText={'名前'}
                floatingLabelFixed
              />

              <h3>Checkbox</h3>

              <Field
                name='Ice'
                component={Checkbox}
                dataList={[{
                  label: 'a',
                  disabled: false
                }, {
                  label: 'b',
                  disabled: false
                }, {
                  label: 'c',
                  disabled: true
                }]}
                disabled={false}
                labelText={'Ice'}
              />
            </StyledSection>

            <StyledSection>
              <h2>default input type</h2>
              <h3>Text</h3>
              <Field name='Text' type='text' component='input' />

              <h3>Color</h3>
              <Field name='Color' component='select'>
                <option />
                <option value='#ff0000'>❤️ Red</option>
                <option value='#00ff00'>💚 Green</option>
                <option value='#0000ff'>💙 Blue</option>
              </Field>

              <h3>LuckyNumber</h3>
              <label><Field name='LuckyNumber' component='input' type='radio' value='1' />1</label>
              <label><Field name='LuckyNumber' component='input' type='radio' value='2' />2</label>
              <label><Field name='LuckyNumber' component='input' type='radio' value='3' />3</label>



              <h3>PotateChips</h3>
              <label><Field name='PotateChips' component='input' type='checkbox' value='salt' />salt</label>
              <label><Field name='PotateChips' component='input' type='checkbox' value='consomme' />consomme</label>

            </StyledSection>

            <StyledPre>{JSON.stringify(values, 0, 2)}</StyledPre>

          </Wrap>
        )}
      />
    </div>)
  }
}

export default TopPage

const Wrap = Styled.div`
  box-sizing: border-box;
  padding: 20px;
`

const StyledPre = Styled.pre`
  background-color: #e8e2e2;
  padding: 10px 15px;
`

const StyledSection = Styled.section`
  padding: 10px;
  margin-bottom: 30px;
  border: solid 1px #f0f0f0;
`
