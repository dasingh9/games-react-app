import {useState} from "react";

const usersCollection = [
    {
        email: 'davinder.singh@institutedata.com',
        password: 'secret123'
    },
    {
        email: 'example@insitutedata.com',
        password: 'secret456'
    }
]

export function LoginForm() {
    //const [email, setEmail] = useState('')
    //const [password, setPassword] = useState('')
    const [userLoginStatusMessage, setUserLoginStatusMessage] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        const inputUser = Object.fromEntries(data);
        console.log(inputUser);

        const user = usersCollection.find(user => user.email == inputUser.email && user.password == inputUser.password);
        if(user)
            setUserLoginStatusMessage("Successfully logged in");
        else
            setUserLoginStatusMessage("Login failed");
    }

    return (
        <div className="componentBox">
            <form onSubmit={handleSubmit}>
                <label>Email:
                    <input name="email" type="email" />
                </label>
                <br/>
                <label>Password:
                    <input name="password" type="password" />
                </label>
                <br/>
                <button>Sigin</button>
                <div>{userLoginStatusMessage}</div>
            </form>
        </div>
    )
}
