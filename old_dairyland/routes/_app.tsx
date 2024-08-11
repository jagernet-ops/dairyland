import { type PageProps } from "$fresh/server.ts";


function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dairyland</title>
        <link rel="stylesheet" href="/styles.css" />
        <script src={Deno.env.get("FONT_AWESOME")} crossorigin="anonymous"></script>
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
export default App;
