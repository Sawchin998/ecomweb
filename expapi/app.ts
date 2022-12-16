interface RegisterData{
    name: string;
    email: string;
    password: string;
    image?: File;
}

class AuthController{

    register = (req, res, next) => {
        let data: RegisterData = req.body as RegisterData;
    }
}

export default AuthController;