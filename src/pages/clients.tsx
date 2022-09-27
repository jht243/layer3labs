import type { NextPage } from "next";

import React from "react";

import Layout from "@/layouts/index";

interface PageProps {
  loaded: boolean;
}

const Clients: NextPage<PageProps> = ({ loaded }) => {
  return (
    <Layout>
      <div className="services-page">clients</div>
    </Layout>
  );
};

export default Clients;
