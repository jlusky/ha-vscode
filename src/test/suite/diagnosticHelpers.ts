import { Diagnostic } from "vscode-languageserver-protocol";

/**
 * LSP 3.18 widened Diagnostic.message to `string | MarkupContent`.
 * Return the plain text either way so tests can match against it.
 */
export function diagnosticText(d: Diagnostic): string {
  return typeof d.message === "string" ? d.message : d.message.value;
}
