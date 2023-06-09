import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Outlet } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { Home } from "./components/Home";
import { Episode } from "./components/Episode";
import { Podcast } from "./components/Podcast";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/podcast/:podcastId" element={<Podcast />} />
          <Route path="episode" element={<Episode />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Podcaster 🎧</Navbar.Brand>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
}
