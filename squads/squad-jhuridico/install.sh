#!/usr/bin/env bash
# Ativa o Squad Jhuridico neste workspace.
# Copia agentes e skills de squads/squad-jhuridico/ para .claude/.
# Idempotente: pode ser executado quantas vezes for preciso.
set -euo pipefail

SQUAD_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$SQUAD_DIR/../.." && pwd)"
DEST="$ROOT/.claude"

echo "⚖️  Ativando squad-jhuridico em $ROOT"

# --- Agentes -----------------------------------------------------------------
mkdir -p "$DEST/agents"
for f in "$SQUAD_DIR"/agents/*.md; do
  name="$(basename "$f")"
  if ! head -1 "$f" | grep -q '^---$'; then
    echo "  ✗ $name sem frontmatter YAML — não será carregado. Abortando." >&2
    exit 1
  fi
  cp "$f" "$DEST/agents/$name"
  echo "  ✓ agente  $name"
done

# --- Skills ------------------------------------------------------------------
mkdir -p "$DEST/skills"
for d in "$SQUAD_DIR"/skills/*/; do
  id="$(basename "$d")"
  if ! head -1 "$d/SKILL.md" | grep -q '^---$'; then
    echo "  ✗ skill $id sem frontmatter YAML — não será carregada. Abortando." >&2
    exit 1
  fi
  mkdir -p "$DEST/skills/$id"
  cp "$d/SKILL.md" "$DEST/skills/$id/SKILL.md"
  echo "  ✓ skill   $id"
done

# --- Limpeza: skills instaladas antigamente como slash commands ---------------
for d in "$SQUAD_DIR"/skills/*/; do
  legacy="$DEST/commands/$(basename "$d").md"
  [ -f "$legacy" ] && rm "$legacy" && echo "  – removido duplicado .claude/commands/$(basename "$d").md"
done
rmdir "$DEST/commands" 2>/dev/null || true

echo "✅ Squad ativo: $(ls "$DEST/agents" | wc -l) agentes, $(ls "$DEST/skills" | wc -l) skills."
echo "   Reinicie a sessão para o Claude Code recarregar o registro."
