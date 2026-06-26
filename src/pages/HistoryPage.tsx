import {
  useEffect,
  useState
} from "react";

import {
  getHistory,
  clearHistory
} from "../storage/historyStorage";

import type {
  HistoryItem
} from "../types/history";

export default function HistoryPage() {

  const [
    history,
    setHistory
  ] = useState<HistoryItem[]>([]);

  async function loadHistory() {

    const data =
      await getHistory();

    setHistory(data);

  }

  useEffect(() => {

    loadHistory();

    const listener = (
      changes: {
        [key: string]:
        chrome.storage.StorageChange;
      },
      area: string
    ) => {

      if (
        area === "local" &&
        changes.history
      ) {

        loadHistory();

      }

    };

    chrome.storage.onChanged.addListener(
      listener
    );

    return () => {

      chrome.storage.onChanged.removeListener(
        listener
      );

    };

  }, []);

  return (

    <div>

      <h2>
        History
      </h2>

      <button
        onClick={async () => {

          await clearHistory();

          loadHistory();

        }}
      >
        Clear History
      </button>

      <br />
      <br />

      {

        history.length === 0

        ? (

          <p>
            No history available.
          </p>

        )

        : (

          history.map(
            (item) => (

              <div
                key={item.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "8px",
                  marginBottom: "10px"
                }}
              >

                <b>
                  {item.action}
                </b>

                <p>

                  <b>Input:</b>

                  <br />

                  {item.input}

                </p>

                <p>

                  <b>Output:</b>

                  <br />

                  {item.output}

                </p>

                <small>

                  {

                    new Date(
                      item.timestamp
                    ).toLocaleString()

                  }

                </small>

              </div>

            )
          )

        )

      }

    </div>

  );

}