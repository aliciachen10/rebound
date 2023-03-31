import styles from "../styles/pages/Dashboard.module.css";

import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet";
import SimpleForm from "../components/chatbot/SimpleForm"

const Dashboard = () => {
  const { user } = useOutletContext();

  return (
    <>
      <Helmet>
        <title>Dashboard - Rebound Health</title>
      </Helmet>

      <div>
        <h2 className={styles.title}>Dashboard</h2>

        <p className={styles["welcome-text"]}>
          Welcome, {user?.metadata?.firstName || "stranger"}{" "}
          <span role="img" alt="hello">
            👋 
          </span>
          <SimpleForm />
        </p>

        <p className={styles["info-text"]}>
        Please note: This program is based on the leading evidence-based methods for healing from trauma, and you can use it by itself or in conjunction with therapy. This is a wellbeing program, not healthcare: we don’t provide medical advice, medical care, or official diagnoses, and any guidance you receive from your therapist, doctor, or other medical professional takes precedence.
        </p>
      </div>
    </>
  );
};

export default Dashboard;
