package org.example.boardback.repository.board.draft;

import org.example.boardback.entity.board.draft.BoardDraft;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardDraftRepository extends JpaRepository<BoardDraft, Long> {
}
