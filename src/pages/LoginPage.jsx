import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import '../components/styles/LoginPage.css'


const LoginPage = () => {

     const {handleSubmit, register, reset}=useForm()

     const {loginUser} = useAuth()

     const submit = data => {
        
        loginUser(data)

        reset({
            email: '',
            password: ''
        })
     }

  return (

    <div className="login_container">
        <div className="login_img_title">
            <img className="login_img" src="/user.png" alt="/user.png" />
        </div>
        <form className="login_form" onSubmit={handleSubmit(submit)}>
        <h2 className="login_form_title">USER</h2>

        <div className="login_div_inputs">
          <label className="login_form_label">
            <span className="login_form_span">Email</span>
            <input className="login_form_input" {...register('email')} type="email" />
          </label>
          <label className="login_form_label">
            <span className="login_form_span">Password</span>
            <input className="login_form_input" {...register('password')} type="password" />
          </label>
        </div>

        <button className="login_btn_submit">Submit</button>
      </form>
    </div>
  )
}

export default LoginPage