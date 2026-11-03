#!/usr/bin/env bash
# Instala o Squad Copy Chief em .claude/ (agentes e skills como comandos).
# Não mexe no Arsenal de Funis nem em outros squads: só remove e recopia os arquivos deste squad.
# Rode a partir de qualquer lugar do repositório depois de editar algo em squads/squad-copy-chief/.
set -euo pipefail
raiz="$(git rev-parse --show-toplevel)"
src="$raiz/squads/squad-copy-chief"
marca="$raiz/.claude/.copy-chief-instalado"
mkdir -p "$raiz/.claude/agents" "$raiz/.claude/commands"

# Remove a instalação anterior deste squad (inclusive agentes e skills que deixaram de existir).
if [[ -f "$marca" ]]; then
  while read -r f; do rm -f "$raiz/.claude/$f"; done < "$marca"
fi
: > "$marca"

for f in "$src"/agents/*.md; do
  cp "$f" "$raiz/.claude/agents/"
  echo "agents/$(basename "$f")" >> "$marca"
done
for d in "$src"/skills/*/; do
  nome="$(basename "$d")"
  cp "$d/SKILL.md" "$raiz/.claude/commands/$nome.md"
  echo "commands/$nome.md" >> "$marca"
done
echo "Squad Copy Chief instalado: $(ls "$src"/agents/*.md | wc -l) agentes, $(ls -d "$src"/skills/*/ | wc -l) skills."
