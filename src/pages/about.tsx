import type { NextPage } from "next";

import React from "react";
import cx from "classnames";

import Layout from "@/layouts/index";
import { NavLink } from "@/components/ui/NavLink";

import styles from "@/styles/pages/About.module.scss";

interface PageProps {
  loaded: boolean;
}

const About: NextPage<PageProps> = ({ loaded }) => {
  return (
    <Layout>
      <div
        className={cx(styles["about-page"], { [styles[`is-loaded`]]: loaded })}
      >
        about Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
        eos harum provident quibusdam recusandae saepe, sapiente voluptatum!
        Animi aspernatur dolore facilis officiis sapiente velit! Adipisci
        consequuntur ex iure mollitia nemo saepe! Amet aspernatur consectetur
        consequatur deserunt doloribus dolorum ducimus ea eligendi eos, esse
        facere fugiat ipsam ipsum, laborum modi molestias odit officiis placeat
        praesentium quidem soluta, sunt tenetur velit veniam voluptate
        voluptatem voluptates! Accusantium incidunt inventore ipsum magni
        numquam qui tempora temporibus voluptates voluptatum. Accusantium ad,
        eaque, eius, est eum ex ipsam necessitatibus rem rerum sit tempora
        tenetur veniam? Deleniti eum impedit in incidunt iusto libero
        necessitatibus possimus provident quidem!
        <br />
        <br />
        <br />
        <br />
        <NavLink href="/">Home</NavLink>
      </div>
    </Layout>
  );
};

export default About;
