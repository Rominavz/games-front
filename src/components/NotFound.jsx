import notFound from '../assets/notFound.png'
import { PageNotFound, LinkBack, Content } from "../styles/NotFound";
import styles from "../styles/Detail.module.css";
import { MdHome } from "react-icons/md";

  export default function NotFound() {
    return (
      <PageNotFound>
        <Content>
            <LinkBack to="/home">
                <MdHome className={styles.goBack}>Regresar</MdHome>
            </LinkBack>
            <img src={notFound} alt="Page Not found" />
            <h2>Page Not found</h2>
        </Content>
      </PageNotFound>
    );
  }

  