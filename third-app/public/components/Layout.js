import Navbar from './Navbar'
import Head from 'next/head'
const Layout = (props) => (
    <div>
        <Head>
            <meta charset="utf-8"></meta>
            <title>TheEvent - Bootstrap Event Template</title>
            <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>
            <meta content="" name="keywords"></meta>
            <meta content="" name="description"></meta>

            <link href="img/favicon.png" rel="icon" />
            <link href="img/apple-touch-icon.png" rel="apple-touch-icon" />

            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800" rel="stylesheet" />
            
            <link href="https://bootswatch.com/4/lumen/bootstrap.min.css" rel="stylesheet" />

        </Head>
        <Navbar />
        {props.children}
    </div>
)

export default Layout
