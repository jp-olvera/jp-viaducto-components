export interface FormFieldProps {
  /** The border type for the input (full, bottom, overlap) */
  border?: 'outside' | 'overlap' | 'bottom' | 'none' | 'default';
  /** set the color border */
  borderColor?: string | null;
  /** Set the input disabled */
  disabled?: boolean;
  /** Set font family */
  family?: string;
  /** The caption for the input */
  label?: string;
  /** Icon for mark input is required */
  required?: boolean;
  /** Set the height of the input */
  inputSize?: 'xsmall' | 'small' | 'default' | 'large';
  /** Id */
  id?: string;
  /** readonly */
  readonly?: boolean;
}
