import MainLayout from "../components/layout/MainLayout";
import ContentContainer from "../components/layout/ContentContainer"
import React from "react"
import './../assets/404.scss'

export default function NotFound() {
  return (
    <MainLayout>
      <ContentContainer>
        <h2>Something gone wrong...</h2>
        <h4>Sorry, we can’t find the page you are looking for.</h4>
        <h4>Maybe some of these most visited links will help you?</h4>
        <span className="four-oh-four">404</span>
      </ContentContainer>
    </MainLayout>
  );
}
