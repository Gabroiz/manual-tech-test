import Image from "next/image";

import styles from "./styles.module.scss";
import Link from "next/link";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContainer}>
          <Link href="https://www.manual.co/">
            <Image
              src="/assets/Symbol2@2x.png"
              className={styles.logo}
              alt="logo"
              width={300}
              height={300}
              quality={100}
            />
          </Link>
          <div className={styles.footerLinks}>
            <ul className={styles.footerProduct}>
              <li>
                <strong>Product</strong>
              </li>
              <li>
                <Link href="https://www.manual.co/">Popular</Link>
              </li>
              <li>
                <Link href="https://www.manual.co/">Trending</Link>
              </li>
              <li>
                <Link href="https://www.manual.co/">Guided</Link>
              </li>
              <li>
                <Link href="https://www.manual.co/">Products</Link>
              </li>
            </ul>
            <ul className={styles.footerCompany}>
              <li>
                <strong>Company</strong>
              </li>
              <li>
                <Link href="https://www.manual.co/">Press</Link>
              </li>
              <li>
                <Link href="https://www.manual.co/">Mission</Link>
              </li>
              <li>
                <Link href="https://www.manual.co/">Strategy</Link>
              </li>
              <li>
                <Link href="https://www.manual.co/">About</Link>
              </li>
            </ul>
            <ul className={styles.footerInfo}>
              <li>
                <strong>Info</strong>
              </li>
              <li>
                <Link href="https://www.manual.co/">Support</Link>
              </li>
              <li>
                <Link href="https://www.manual.co/">Custom Service</Link>
              </li>
              <li>
                <Link href="https://www.manual.co/">Get Started</Link>
              </li>
            </ul>
            <ul className={styles.footerFollow}>
              <li>
                <strong>Follow us</strong>
              </li>
              <li>
                <div className={styles.social}>
                  <Link href="https://www.manual.co/">
                    <Image
                      src="/assets/logo-fb-simple.svg"
                      alt=""
                      height={20}
                      width={20}
                    />
                  </Link>
                  <Link href="https://www.manual.co/">
                    <Image
                      src="/assets/googlesvg.svg"
                      alt=""
                      height={20}
                      width={20}
                    />
                  </Link>
                  <Link href="https://www.manual.co/">
                    <Image
                      src="/assets/twittersvg.svg"
                      alt=""
                      height={20}
                      width={20}
                    />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <span className={styles.footerCopyright}>
          © 2021 Manual. All rights reserved
        </span>
      </div>
    </footer>
  );
}
