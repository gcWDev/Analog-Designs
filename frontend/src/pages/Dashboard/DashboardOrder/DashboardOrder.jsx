import React, { useState } from "react";
import styles from "./DashboardOrder.module.css";
import InformationForm from "./InformationForm";
import ServiceManager from "./ServiceManager";
import Calendar from "./Calendar";
import OrderSummaryChart from "./OrderSummaryChart";

export const FormData = React.createContext();

export default function DashboardOrder() {
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    ownerEmail: "",
    ownerName: "",
    ownerPhone: "",
    services: [
      {
        serviceName: "",
        servicePrice: "",
        serviceDescription: "",
      },
    ],
    dates: {
      //Edge case to handle initial value of start date is handled inside the ProgressBar component
      start: new Date(),
      end: "",
    },
  });

  return (
    <>
      <InformationForm formData={formData} setFormData={setFormData} />
      <div className={styles.lastColumn}>
        <ServiceManager
          services={formData.services}
          setFormData={setFormData}
        />
        <div className={styles.bottomRowLastColumn}>
          <Calendar
            startDate={formData.dates.start}
            endDate={formData.dates.end}
            setFormData={setFormData}
          />
          <OrderSummaryChart
            end={formData.dates.end}
            start={formData.dates.start}
          />
        </div>
      </div>
    </>
  );
}
