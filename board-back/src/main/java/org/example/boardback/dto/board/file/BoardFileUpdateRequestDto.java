package org.example.boardback.dto.board.file;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class BoardFileUpdateRequestDto {
    // 유지할 기본 파일 리스트 (file_info의 id 값)
    private List<Long> keepFileIds;

    // 새로 추가되는 파일
    private List<MultipartFile> newFiles;
}
