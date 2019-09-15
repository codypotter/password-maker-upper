import '../styles/styles.sass';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PasswordMakerUpper from "../components/PasswordMakerUpper";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PasswordMakerUpper />
        <Footer />
      </div>
    )
  }
}
