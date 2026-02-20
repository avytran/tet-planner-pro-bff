import app from "./app.js";
import { PORT } from "./config/env.js";

app.listen(PORT || 4000, () => {
  console.log(`Server ready at http://localhost:${PORT}/graphql`);
})