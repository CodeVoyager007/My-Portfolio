"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, ToggleButton } from "@once-ui-system/core";

import { routes, display, person, about, blog, work, journey, certifications } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

type Routes = {
  "/": boolean;
  "/about": boolean;
  "/work": boolean;
  "/blog": boolean;
  "/contact": boolean;
  "/journey": boolean;
  "/certifications": boolean;
}

const typedRoutes = routes as Routes;

type TimeDisplayProps = {
  timeZone: string;
  locale?: string;
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-US" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        position="unset"
        className={styles.position}
        as="header"
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
      >
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s" className={styles.locationContainer}>
          {display.location && <Flex hide="s">{person.location}</Flex>}
        </Flex>
        <Flex fillWidth horizontal="center" className={styles.navWrapper}>
          <Flex
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
            className={styles.navBar}
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning className={styles.navItems}>
              {routes["/"] && (
                <ToggleButton 
                  prefixIcon="home" 
                  href="/" 
                  selected={pathname === "/"}
                  className={styles.mobileIcon}
                />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" className={styles.hideMobile} />
              {routes["/about"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/about"
                    label={about.label}
                    selected={pathname === "/about"}
                  />
                  <ToggleButton
                    className={`s-flex-show ${styles.mobileIcon}`}
                    prefixIcon="person"
                    href="/about"
                    selected={pathname === "/about"}
                  />
                </>
              )}
              {routes["/work"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    href="/work"
                    label={work.label}
                    selected={pathname.startsWith("/work")}
                  />
                  <ToggleButton
                    className={`s-flex-show ${styles.mobileIcon}`}
                    prefixIcon="grid"
                    href="/work"
                    selected={pathname.startsWith("/work")}
                  />
                </>
              )}
              {routes["/blog"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="book"
                    href="/blog"
                    label={blog.label}
                    selected={pathname.startsWith("/blog")}
                  />
                  <ToggleButton
                    className={`s-flex-show ${styles.mobileIcon}`}
                    prefixIcon="book"
                    href="/blog"
                    selected={pathname.startsWith("/blog")}
                  />
                </>
              )}
              {routes["/contact"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="mail"
                    href="/contact"
                    label="Contact"
                    selected={pathname.startsWith("/contact")}
                  />
                  <ToggleButton
                    className={`s-flex-show ${styles.mobileIcon}`}
                    prefixIcon="mail"
                    href="/contact"
                    selected={pathname.startsWith("/contact")}
                  />
                </>
              )}
              {typedRoutes["/journey"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="timeline"
                    href="/journey"
                    label={journey.label}
                    selected={pathname.startsWith("/journey")}
                  />
                  <ToggleButton
                    className={`s-flex-show ${styles.mobileIcon}`}
                    prefixIcon="timeline"
                    href="/journey"
                    selected={pathname.startsWith("/journey")}
                  />
                </>
              )}
              {routes["/certifications"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="certificate"
                    href="/certifications"
                    label={certifications.label}
                    selected={pathname.startsWith("/certifications")}
                  />
                  <ToggleButton
                    className={`s-flex-show ${styles.mobileIcon}`}
                    prefixIcon="certificate"
                    href="/certifications"
                    selected={pathname.startsWith("/certifications")}
                  />
                </>
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" className={styles.hideMobile} />
                  <ThemeToggle />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center" className={styles.hideMobile}>
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex hide="s">{display.time && <TimeDisplay timeZone={person.location} />}</Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};