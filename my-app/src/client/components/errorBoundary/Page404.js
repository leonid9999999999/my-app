import { Link } from 'react-router-dom';
import ErrorMessage from "./ErrorMessage";

const Page404 = () => {
    return (
        <div style={{marginTop: '120px'}}>
            <ErrorMessage/>
            <p style={{
                'textAlign': 'center',
                'fontWeight': 'bold',
                'fontSize': '24px', 
                'color': 'white',
                
            }}>
                Page doesn't exist 404
            </p>
            <Link style={{
                'display': 'block',
                'textAlign': 'center',
                'fontWeight': 'bold', 
                'fontSize': '24px', 
                'marginTop': '30px'}} to="/home">
                    Back to main page
            </Link>
        </div>
    )
}

export default Page404;