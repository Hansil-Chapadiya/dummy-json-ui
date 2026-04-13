import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../features/authSlice";
import type { AppDispatch } from "../store.ts";
import { useNavigate } from "react-router";

type FormDataType = {
    username: string,
    password: string,
}

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormDataType>();
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const onSubmit = async (data: FormDataType) => {
        try {
            await dispatch(login(data)).unwrap();
            navigate('/home', { replace: true });
        } catch {
            // Keep the user on login page when authentication fails.
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>USERNAME </label>
                <input {...register('username',
                    {
                        required: {
                            value: true,
                            message: "username is required"
                        }
                    }
                )} />
                {errors.username && <p>{errors.username.message as string}</p>}
            </div>
            <div>
                <label>PASSWORD</label>
                <input {...register('password',
                    {
                        required: {
                            value: true,
                            message: "password is required"
                        }
                    }
                )} />
                {errors.password && <p>{errors.password.message as string}</p>}
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;