export function watchSubtitles() {

  const observer =
    new MutationObserver(
      () => {

        console.log(
          "Subtitle changed"
        );

      }
    );

  observer.observe(
    document.body,
    {
      subtree: true,
      childList: true
    }
  );

}