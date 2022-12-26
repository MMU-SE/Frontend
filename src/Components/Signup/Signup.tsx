import { Singup } from "react";

export const SingUp = (callback: any, initialState = {}) => {
    const [values, setValues] = Singup(initialState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
}

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback();
    };

    return {
        onChange,
        onSubmit,
        values,
    };

export default Signup;
