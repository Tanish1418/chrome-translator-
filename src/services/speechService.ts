export function speak(
  text: string
) {

  const utterance =
    new SpeechSynthesisUtterance(
      text
    );

  speechSynthesis.speak(
    utterance
  );

}