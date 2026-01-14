const togglePasswordVisibility = (state) => {
        state((prevState) => ({
        showPassword: !prevState.showPassword,
        }));
};

export default togglePasswordVisibility