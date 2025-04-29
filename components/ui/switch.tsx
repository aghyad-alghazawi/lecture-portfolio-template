import styles from "@/styles/modules/switch.module.css"

interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  id?: string
  disabled?: boolean
}

const Switch = ({ checked, onChange, label, id, disabled }: SwitchProps) => {
  const switchId = id || `switch-${Math.random().toString(36).substring(2, 9)}`
  return (
    <div style={{ display: "inline-flex", alignItems: "center" }}>
      <label className={styles.switch} htmlFor={switchId}>
        <input
          id={switchId}
          type="checkbox"
          className={styles.switchInput}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          role="switch"
          aria-checked={checked}
          disabled={disabled}
        />
        <span className={styles.slider} aria-hidden="true" />
      </label>
      {label && (
        <label className={styles.switchLabel} htmlFor={switchId}>
          {label}
        </label>
      )}
    </div>
  )
}

export { Switch }
