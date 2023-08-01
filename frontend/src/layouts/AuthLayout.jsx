import React from "react";
import Card from "../components/elements/Card";
import MiscCard from "../components/templates/MiscCard";
import { Outlet } from "react-router-dom";

export default function Login() {
  return (
    <section className="login-container">
      <Card id={0}>
        <div className="auth-form">
          <Outlet />
        </div>
        <MiscCard />
      </Card>
    </section>
  );
}
