#!/usr/bin/env bash
# Instala o squad Arsenal de Funis em .claude/ (agentes e skills como comandos).
# Rode a partir de qualquer lugar do repositório depois de editar algo em squads/squad-arsenal/.
set -euo pipefail
raiz="$(git rev-parse --show-toplevel)"
src="$raiz/squads/squad-arsenal"
mkdir -p "$raiz/.claude/agents" "$raiz/.claude/commands"

# Remove a instalação anterior deste squad (inclusive agentes e skills que deixaram de existir).
if [[ -f "$raiz/.claude/.arsenal-instalado" ]]; then
  while read -r f; do rm -f "$raiz/.claude/$f"; done < "$raiz/.claude/.arsenal-instalado"
fi
: > "$raiz/.claude/.arsenal-instalado"

for f in "$src"/agents/*.md; do
  cp "$f" "$raiz/.claude/agents/"
  echo "agents/$(basename "$f")" >> "$raiz/.claude/.arsenal-instalado"
done
for d in "$src"/skills/*/; do
  nome="$(basename "$d")"
  cp "$d/SKILL.md" "$raiz/.claude/commands/$nome.md"
  echo "commands/$nome.md" >> "$raiz/.claude/.arsenal-instalado"
done
echo "Arsenal instalado: $(ls "$src"/agents/*.md | wc -l) agentes, $(ls -d "$src"/skills/*/ | wc -l) skills."
