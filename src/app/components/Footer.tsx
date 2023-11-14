import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <hr />
      <nav className="flex flex-col">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/terms-and-conditions">Terms and conditions</Link>
        <Link href="/shopping">Shopping</Link>
        <Link href="/return-policy">Return Policy</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/faq">FAQ</Link>
      </nav>
      <hr />
      <div className="flex space-x-6">
        <p>© 2023 MERCH, Inc. All rights reserved.</p>

        <p>Designed in Liverpool</p>
      </div>
    </footer>
  );
}
