import profilePic from "../assets/icons/profile-pic.svg";

export default function ProposalCard({ proposal, type }) {
  return (
    <div className="mb-5 flex max-h-[226px] max-w-[1216px] flex-row justify-between rounded-xl border border-[var(--color-primary)] px-8 py-6">
      <div className="flex flex-row gap-4">
        <div className="relative h-40 w-56 rounded-xl bg-gray-200">
          <span
            className={`absolute top-2 left-2 max-h-[22px] max-w-[72px] rounded-lg px-2 py-1 text-xs ${proposal?.status === "PENDING" && "bg-[var(--color-tertiary)] text-[var(--color-primary)]"} ${proposal?.status === "ACCEPTED" && "bg-[var(--color-feedback-success)] text-white"} ${proposal?.status === "REJECTED" && "bg-[var(--color-feedback-error)] text-white"}`}
          >
            {proposal?.status}
          </span>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <h1 className="font-bricolage text-lg font-medium">
            {proposal?.desiredItem?.name}
          </h1>
          <p className="font-inter max-w-[50ch] text-base break-words text-[var(--color-text)]">
            {proposal?.desiredItem?.description}
          </p>
          <span className="flex flex-row items-center gap-2">
            <img
              src={proposal?.desiredItemId?.imageUrl || profilePic}
              className="h-9 w-9"
            />
            <p className="font-inter text-sm font-medium">
              {proposal?.sender?.name}
            </p>
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6">
        {type === "received-proposals" && (
          <>
            <button className="font-bricolage h-16 w-64 cursor-pointer rounded-lg border bg-[var(--color-primary)] text-lg font-medium text-white transition-all duration-700 hover:bg-[var(--color-tertiary)]">
              Aceitar
            </button>
            <button className="font-bricolage h-16 w-64 cursor-pointer rounded-lg border border-[var(--color-secondary)] bg-white text-lg font-medium text-[var(--color-secondary)] transition-all duration-700 hover:bg-[var(--color-secondary)] hover:text-white">
              Recusar
            </button>
          </>
        )}

        {type === "sent-proposals" && (
          <button className="font-bricolage h-16 w-64 cursor-pointer rounded-lg border border-[var(--color-feedback-error)] bg-white text-lg font-medium text-[var(--color-feedback-error)] transition-all duration-700 hover:bg-[var(--color-feedback-error)] hover:text-white">
            Remover
          </button>
        )}
        {proposal?.status === "ACCEPTED" && (
          <button className="font-bricolage h-16 w-64 cursor-pointer rounded-lg bg-[var(--color-tertiary)] text-lg font-medium text-[var(--color-primary)] transition-all duration-700 active:scale-95">
            Combinar entrega
          </button>
        )}
      </div>
    </div>
  );
}
