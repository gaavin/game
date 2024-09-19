import { $, component$, useSignal } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { invoke } from "@tauri-apps/api/tauri";

export default component$(() => {
  const message = useSignal("");
  const gnomed = $(async () => {
    message.value = await invoke("greet", { name: "World" });
  });

  return (
    <>
      <h1>I am gnot a gnelf</h1>
      <div>
        I am gnot a gnoblin
        <br />
        <button onClick$={gnomed}>hello</button>
        <br />
        <h2>{message.value}</h2>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
