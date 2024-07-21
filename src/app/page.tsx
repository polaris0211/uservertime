import {
  description,
  section,
  titleElement,
  urlButton,
  urlInput,
} from "@/css/page.css";

export default function Home() {
  return (
    <>
      <h1 className={titleElement}>uServerTime</h1>
      <div className={description}>Most Accurate Server Time</div>
      <section className={section}>
        <input placeholder="Type URL" className={urlInput} type="url" />
        <button className={urlButton}>Get Server Time</button>
      </section>
    </>
  );
}
