defmodule Hatcher.Repo do
  use Ecto.Repo,
    otp_app: :hatcher,
    adapter: Ecto.Adapters.Postgres
end
