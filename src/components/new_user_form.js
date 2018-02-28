import React from 'react'
import { Field, reduxForm } from 'redux-form'

let NewUserForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fname">First Name</label>
        <Field name="fname" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lname">Last Name</label>
        <Field name="lname" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <Field name="phone" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="dob">Date of Birth</label>
        <Field name="dob" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="ssn">Social Security No</label>
        <Field name="ssn" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <Field name="address" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="city">City</label>
        <Field name="city" component="input" type="text" />
      </div>
      <div>
        <label>State</label>
        <div>
          <Field name="state" component="select">
            <option />
            <option value="North Carolina">North Carolina</option>
            <option value="Arizona">Arizona</option>
            <option value="California">California</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor="zip">Zip</label>
        <Field name="zip" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <Field name="country" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

NewUserForm = reduxForm({ form: 'contact' })(NewUserForm)
export default NewUserForm
