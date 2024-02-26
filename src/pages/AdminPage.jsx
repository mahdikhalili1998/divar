import React from "react";
import CategoryForm from "../components/CategoryForm";
import CategoryList from "../components/CategoryList";

function AdminPage() {
  return (
    <div>
      <CategoryForm />
      <CategoryList />
    </div>
  );
}

export default AdminPage;
