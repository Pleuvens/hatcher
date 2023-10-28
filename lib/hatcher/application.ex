defmodule Hatcher.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      HatcherWeb.Telemetry,
      # Start the Ecto repository
      Hatcher.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: Hatcher.PubSub},
      # Start Finch
      {Finch, name: Hatcher.Finch},
      # Start the Endpoint (http/https)
      HatcherWeb.Endpoint
      # Start a worker by calling: Hatcher.Worker.start_link(arg)
      # {Hatcher.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Hatcher.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    HatcherWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
