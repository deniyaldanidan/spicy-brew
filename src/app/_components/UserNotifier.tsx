"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import NoticeComponent from "@/app/_components/NoticeComponent";
import Link from "next/link";

export default function UserNotifier() {
  const [notified, setNotified] = useLocalStorage<boolean>("noticed", false);

  return (
    <NoticeComponent visible={!notified} setVisible={setNotified}>
      Welcome to Spicy Brew! This app is built to showcase my skills. No user
      information is collected as all inputs are saved locally in your browser.
      Explore the source code at{" "}
      <Link href="https://github.com/deniyaldanidan/spicy-brew" target="_blank">
        here
      </Link>{" "}
      and view my portfolio at{" "}
      <Link href="https://danidevstudio.com/" target="_blank">
        danithedev.tech
      </Link>
      . Enjoy your experience with Spicy Brew!
    </NoticeComponent>
  );
}
